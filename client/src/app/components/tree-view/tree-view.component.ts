import {Component, OnInit} from "@angular/core";
import {EducationInstitutionService} from "../../service/education-institution/education-institution.service";
import {FacultyModel} from "../../model/faculty.model";
import {SpecialityModel} from "../../model/speciality.model";
import {EducationInstitutionModel} from "../../model/education-institution.model";
import {isNullOrUndefined} from "util";
import {Store} from "@ngrx/store";
import {UserModel} from "../../model/user.model";
import {GET_USER} from "../../reducers/role.reducer";
import {LoginService} from "../../service/login/login.service";

@Component({
  moduleId: module.id,
  selector: 'tree-view',
  templateUrl: 'tree-view.component.html',
  styles: ['tree-view.component.css'],
})

export class TreeViewComponent implements OnInit {

  templateOptions = {
    isExpandedField: 'expanded',
    idField: 'uuid',
    nodeHeight: 30,
    allowDrag: true,
    useVirtualScroll: true
  }

  errorMessage: string;
  formType: number = 0;
  entity: any;
  temp: any[] = [];
  nodes: any[] = [];
  currentUser: UserModel;

  constructor(private educationInstitutionService: EducationInstitutionService,
              private store: Store<any>, private loginService: LoginService) {
  }

  ngOnInit() {

    this.currentUser = new UserModel();

    this.loadTree();
  }

  addNode(tree, node) {

    if (isNullOrUndefined(node)) {
      this.nodes.push({
        name: this.getDefaultName(1),
        actionName: this.getDefaultName(2),
        children: [],
        item: new Object(),
        isFocus: false
      });
    } else {

      node.data.children.push({
        name: this.getDefaultName(node.level + 1),
        actionName: this.getDefaultName(node.level + 2),
        children: [],
        item: new Object(),
        isFocus: false
      });
    }
    tree.treeModel.update();
  }

  getDefaultName(level): String {
    var name;

    switch (level) {
      case 1:
        name = "Университет";
        break;
      case 2:
        name = "Факультет";
        break;
      case 3:
        name = "Специальность";
        break;
    }

    return name;
  }

  onEvent(event) {

    if (!isNullOrUndefined(event.node) && event.eventName === "onFocus") {
      event.node.data.isFocus = true;
      this.formType = event.node.level;
      this.entity = event.node.data.item;
    } else {
      if (!isNullOrUndefined(event.node)
        && event.eventName != "onToggleExpanded"
        && event.eventName != "onDeactivate"
        && event.eventName != "onUpdateData") {
        event.node.data.isFocus = false;
      }
    }
  }

  onChanged(entity) {
    this.entity = entity;
  }

  onAdded($event, tree, node) {
    $event.stopPropagation();
    this.addNode(tree, node);
  }

  createEntity(node) {

    let entity = node.data.item;
    entity.faculties = [];
    for (let i = 0; i < node.data.children.length; i++) {

      let faculty = node.data.children[i].item;
      entity.faculties.push(faculty);
      entity.faculties[i].specialities = [];

      for (let j = 0; j < node.data.children[i].children.length; j++) {

        let speciality = node.data.children[i].children[j].item;

        entity.faculties[i].specialities.push(speciality);
      }
    }

    return entity;
  }

  saveTree(node) {

    let entity = this.createEntity(node);

    if (isNullOrUndefined(entity.id)) {
      this.educationInstitutionService.create(entity)
        .subscribe(
          item => {
            entity = item;
          },
          error => this.errorMessage = <any>error
        );
    } else {
      this.educationInstitutionService.update(entity)
        .subscribe(
          item => {
            entity = item;
          },
          error => this.errorMessage = <any>error
        );
    }
  }

  loadTree() {
    this.educationInstitutionService.getInstitutionByCurrentUser()
      .subscribe(
        items => {
          this.initNodes(items);
        },
        error => this.errorMessage = <any>error
      );
  }

  initNodes(items: any): any {

    for (let i = 0; i < items.length; i++) {

      let educationInstitution = new EducationInstitutionModel();
      educationInstitution.setProperties(items[i]);

      this.temp.push({
        name: this.getDefaultName(1),
        actionName: this.getDefaultName(2),
        children: [],
        item: educationInstitution
      });

      if (!isNullOrUndefined(items[i].faculties)) {
        for (let j = 0; j < items[i].faculties.length; j++) {

          let faculty = new FacultyModel();
          faculty.setProperties(items[i].faculties[j]);

          this.temp[i].children.push({
            name: this.getDefaultName(2),
            actionName: this.getDefaultName(3),
            children: [],
            item: faculty
          });

          if (!isNullOrUndefined(items[i].faculties[j].specialities)) {

            for (let k = 0; k < items[i].faculties[j].specialities.length; k++) {

              let speciality = new SpecialityModel();
              speciality.setProperties(items[i].faculties[j].specialities[k]);

              this.temp[i].children[j].children.push({
                name: this.getDefaultName(3),
                actionName: "",
                children: [],
                item: speciality
              });
            }
          }
        }
      }
    }

    this.nodes = this.temp;
  }
}

import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TreeNode, TREE_ACTIONS, KEYS, IActionMapping, TreeComponent} from 'angular-tree-component';
import {EducationInstitutionService} from "../../service/education-institution/education-institution.service";
import {FacultyModel} from "../../model/faculty.model";
import {SpecialityModel} from "../../model/speciality.model";
import {EducationInstitutionModel} from "../../model/education-institution.model";
import {isNullOrUndefined} from "util";

@Component({
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
  focusedNode: any;
  nodes: any[] = [];

  constructor(private educationInstitutionService: EducationInstitutionService) {
  }

  ngOnInit() {
    this.loadTree();
  };

  addNode(tree, node) {

    if (isNullOrUndefined(node)) {
      this.nodes.push({
        name: this.getDefaultName(1),
        actionName: this.getDefaultName(2),
        children: [],
        item: new Object()
      });
    } else {

      node.data.children.push({
        name: this.getDefaultName(node.level + 1),
        actionName: this.getDefaultName(node.level + 2),
        children: [],
        item: new Object()
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

    this.formType = 0;

    if (event.eventName == "onFocus") {

      this.formType = event.node.level;
      this.focusedNode = event.node;
      this.entity = event.node.data.item;
    }
  }

  onChanged(entity) {
    this.entity = entity;
    console.log(entity);
  }

  onAdded($event, tree, node) {
    $event.stopPropagation();
    this.addNode(tree, node);
  }

  createEntity(node){

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

    return  entity;
  }

  saveTree(entity) {
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
    this.educationInstitutionService.getAll()
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

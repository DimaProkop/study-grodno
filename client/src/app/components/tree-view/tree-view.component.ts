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

  errorMessage: string;
  formType: number;
  entity: any;

  focusedNode: any;
  nodes: any[] = [];

  constructor(private educationInstitutionService: EducationInstitutionService) {
    this.entity = new Object();
  }

  ngOnInit() {
    this.nodes = [];
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

  templateOptions = {
    isExpandedField: 'expanded',
    idField: 'uuid',
    nodeHeight: 23,
    allowDrag: true,
    useVirtualScroll: true
  }

  onEvent(event) {

    if (!isNullOrUndefined(event.node)) {

      this.formType = event.node.level;
      this.focusedNode = event.node;
      this.entity = event.node.data.item;
    }
  }

  onChanged(entity) {
    this.entity = entity;
  }

  onAdded($event, tree, node) {
    $event.stopPropagation();
    this.addNode(tree, node);
  }

  saveTree(node) {
    let university = node.data.item;
    university.faculties = [];
    for (let i = 0; i < node.data.children.length; i++) {
      university.faculties.push(node.data.children[i].item);
      university.faculties[i].specialities = [];
      for (let j = 0; j < node.data.children[i].children.length; j++) {
        university.faculties[i].specialities.push(node.data.children[i].children[j].item);
      }
    }

    if (isNullOrUndefined(university.id)) {
      this.educationInstitutionService.create(university)
        .subscribe(
          item => {
            university = item;
          },
          error => this.errorMessage = <any>error
        );
    } else {
      this.educationInstitutionService.update(university)
        .subscribe(
          item => {
            university = item;
          },
          error => this.errorMessage = <any>error
        );
    }
  }

  loadTree(tree, node) {

    let educationInstitutions = [];

    this.addNode(tree, node);

    this.educationInstitutionService.getAll()
      .subscribe(
        items => {
          educationInstitutions = items;
          this.setNodes(educationInstitutions);

        },
        error => this.errorMessage = <any>error
      );
  }

  setNodes(items: any): any {

    for (let i = 0; i < items.length; i++) {

      let educationInstitution = new EducationInstitutionModel();
      educationInstitution.setProperties(items[i]);

      this.nodes.push({
        name: this.getDefaultName(1),
        actionName: this.getDefaultName(2),
        children: [],
        item: educationInstitution
      });

      if (!isNullOrUndefined(items[i].faculties)) {
        for (let j = 0; j < items[i].faculties.length; j++) {

          let faculty = new FacultyModel();
          faculty.setProperties(items[i].faculties[j]);

          this.nodes[i].children.push({
            name: this.getDefaultName(2),
            actionName: this.getDefaultName(3),
            children: [],
            item: faculty
          });

          if (!isNullOrUndefined(items[i].faculties[j].specialities)) {

            for (let k = 0; k < items[i].faculties[j].specialities.length; k++) {

              let speciality = new SpecialityModel();
              speciality.setProperties(items[i].faculties[j].specialities[k]);

              this.nodes[i].children[j].children.push({
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
  }
}

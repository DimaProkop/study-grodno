import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TreeNode, TREE_ACTIONS, KEYS, IActionMapping, TreeComponent } from 'angular-tree-component';
import { EducationInstitutionService } from "../../service/education-institution/education-institution.service";
import { isNullOrUndefined } from "util";

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
  nodes: any[];

  constructor(private educationInstitutionService: EducationInstitutionService) {
    this.entity = new Object();
  }

  ngOnInit() {
    this.nodes = [];
    this.loadHierarchy();
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
      case 1: name = "Университет"; break;
      case 2: name = "Факультет"; break;
      case 3: name = "Специальность"; break;
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

  saveHierarchy($event, node) {
    var university = node.data.item;
    university.faculties = [];
    for (var i = 0; i < node.data.children.length; i++) {
      university.faculties.push(node.data.children[i].item);
      university.faculties[i].specialties = [];
      for (var j = 0; j < node.data.children[i].children.length; j++) {
        university.faculties[i].specialties.push(node.data.children[i].children[j].item);
      }
    }
    this.educationInstitutionService.create(university)
      .subscribe(
        item => {
          university = item;
        },
        error => this.errorMessage = <any>error
      );
  }

  loadHierarchy() {

    var educationInstitutions = [];

    this.educationInstitutionService.getAll()
      .subscribe(
        items => {
          educationInstitutions = items;
          console.log(educationInstitutions);
        },
        error => this.errorMessage = <any>error
      );
  }
}

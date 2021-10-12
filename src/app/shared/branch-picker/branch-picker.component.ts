import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBranch } from 'src/app/common/branch';
import { BranchesApiService } from 'src/app/data/branches-api.service';

@Component({
  selector: 'app-branch-picker',
  templateUrl: './branch-picker.component.html',
  styleUrls: ['./branch-picker.component.css'],
})
export class BranchPickerComponent implements OnInit {
  name: string = '';
  results: IBranch[] = [];

  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() currentBranch: EventEmitter<IBranch | undefined> = new EventEmitter<
    IBranch | undefined
  >();
  constructor(private branchApiService: BranchesApiService) {}

  ngOnInit(): void {}

  close(): void {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  search(): void {
    if (this.name === null || this.name.match(/^ *$/) !== null) {
      this.branchApiService.getBranches().subscribe({
        next: (results) => (this.results = results),
      });
    } else {
      this.branchApiService.findBranchByName(this.name).subscribe({
        next: (results) => (this.results = results),
      });
    }
  }

  select(branch: IBranch): void {
    this.currentBranch.emit(branch);
    this.visible = false;
    this.visibleChange.emit(false);
  }
}

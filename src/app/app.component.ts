import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import Gantt from 'frappe-gantt';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('gantt') ganttEl: ElementRef;
  name = 'Angular';
  gantt;
  tasks = [
    {
      id: 't1',
      name: 'TASK 1',
      start: '2021-12-31T13:21:54.530Z',
      end: '2021-12-31T13:51:54.530Z',
      progress: 47,
      dependencies: '',
    },
    {
      id: 't2',
      name: 'TASK 2',
      start: '2021-12-31T14:21:54.530Z',
      end: '2021-12-31T14:51:54.530Z',
      progress: 19.5,
      dependencies: 't1',
    },
  ];

  ngOnInit() {
    this.gantt = new Gantt('#gantt', this.tasks, {
      on_click: function (task) {
        console.log(task);
      },
      on_date_change: function (task, start, end) {
        console.log(task, start, end);
      },
      on_progress_change: function (task, progress) {
        console.log(task, progress);
      },
      on_view_change: function (mode) {
        console.log(mode);
      },
      view_mode: 'Quarter Day',
      language: 'en',
    });
  }
}

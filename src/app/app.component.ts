import { animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': '#59C173',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': '#a17fe0',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': '#11998e',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': '#38ef7d',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': '#FF0099',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal <=> highlighted', animate(500)),
      transition('shrunken <=> *', [
        style({
          'background-color': '#948E99'
        }),
        animate(1000, style({
          'border-radius': '50px'
        })),
        animate(500)
      ])
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          opacity: 0,
          transform: 'translateX(100px)'
        }))
      ])
    ]),
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translate(0)'
      })),
      transition('void => *', animate(1000, keyframes([
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
          offset: 0
        }),
        style({
          opacity: 0.5,
          transform: 'translateX(-50px)',
          offset: 0.3
        }),
        style({
          opacity: 1,
          transform: 'translateX(-20px)',
          offset: 0.8
        }),
        style({
          opacity: 1,
          transform: 'translateX(0)',
          offset: 1
        }),
      ]))),
      transition('* => void', [
        group([
          animate(500, style({
            color: 'red'
          })),
          animate(500, style({
            transform: 'translateX(100px)',
             opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'ng-animations';
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item): void{
    this.list.push(item);
  }

  onDelete(item): void{
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimation(): void{
    if (this.state === 'normal'){
      this.state = 'highlighted';
    }else{
      this.state = 'normal';
    }
    if (this.wildState === 'normal'){
      this.wildState = 'highlighted';
    }else{
      this.wildState = 'normal';
    }
  }

  onShrink(): void{
    this.wildState = 'shrunken';
  }

  startAnimation(event): void{
    console.log(event);
  }

  stopAnimation(event): void{
    console.log(event);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  template: ` <div>
    <h1>{{ title }}</h1>
    <div id="container">
      <p class="card">{{ message }}</p>
    </div>
  </div>`,
  // templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class Hello {
  title: string = 'Hello-app';
  private msg: string = 'initial message';
  styleClass: string = 'alert';
  // price: number = 0;
  // now: Date = new Date();

  get message() {
    return this.msg.toUpperCase();
  }

  set message(value: string) {
    const alphanumericRegex = /^[a-zA-Z0-9 !?.,]+$/;

    if (alphanumericRegex.test(value)) {
      this.msg = value;
    } else {
      throw new Error('エラー: 半角英数字のみ設定可能です');
    }
  }

  constructor() {
    // setInterval(() => {
    //   this.now = new Date();
    // }, 1000);

    // setInterval(() => {
    //   this.styleClass = this.styleClass === 'alert' ? 'card' : 'alert';
    //   console.log(this.styleClass);
    // }, 1000);

    this.title = 'Hello-app';
    this.message = 'This is a my first Angular app.';
  }

  // ngOnInit(): void {
  //   this.title = 'Hello-app';
  //   this.message = 'This is a first component. ';
  //   this.styleClass = 'alert';
  //   // this.price = 12345;
  // }

  // today(): string {
  //   return this.now.toLocaleString();
  // }
}

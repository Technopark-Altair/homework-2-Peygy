import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HomeWork2';
  firstOperand: number;
  secondOperand: number;
  operator: string;
  result: number;
  error: string;

  doCalc()
  {
    if(this.firstOperand != null && this.secondOperand != null && this.operator !=  null)
    {
      if(this.operator == "-")
      {
        this.result = this.firstOperand - this.secondOperand;
        this.error = "Нет ошибки";
      }
      else if(this.operator == "+")
      {
        this.result = this.firstOperand + this.secondOperand;
        this.error = "Нет ошибки";
      }
      else if(this.operator == "*")
      {
        this.result = this.firstOperand * this.secondOperand;
        this.error = "Нет ошибки";
      }
      else if(this.operator == "/")
      {
        if(this.secondOperand == 0)
        {
          this.error = "На ноль делить нельзя!"
        }
        else
        {
          this.result = this.firstOperand / this.secondOperand;
          this.error = "Нет ошибки";
        }
      }
    }
    else
    {
      if(this.firstOperand == null)
      {
        this.error = "Нет первого числа";
      }
      else if(this.secondOperand == null)
      {
        this.error = "Нет второго числа";
      }
      else if(this.operator == null)
      {
        this.error = "Нет оператора действия";
      }
    }
  }
}

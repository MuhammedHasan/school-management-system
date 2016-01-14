import { Injectable } from 'angular2/core';

@Injectable()
export class MoneyTransaction {
  id: number;
  explanation: String;
  amount: String;
  date: String;
}

@Injectable()
export class MoneyTransactionService {
  transactions = new Array<MoneyTransaction>();

  constructor() {
    var i = new MoneyTransaction();
    i.id = 1;
    i.explanation = "Bagis";
    i.amount = "10000";
    i.date = "12/12/2015";
    this.transactions.push(i);

    var i = new MoneyTransaction();
    i.id = 2;
    i.explanation = "Bagis";
    i.amount = "30000";
    i.date = "03/01/2016";
    this.transactions.push(i);
  }

  get(id: number) {
    return this.transactions[0];
  }

  getallExpense() {
    return this.transactions;
  }

  getallIncome() {
    return this.transactions;
  }

  save() { }

}

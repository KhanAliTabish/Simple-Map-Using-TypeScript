import faker, { fake }  from 'faker'
import { Mappable } from './CustomMap'

export class Company implements Mappable{
  companyName: string
  catchPhrase: string
  location: {
    lat: number,
    lng: number
  }
  constructor () {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
    <div>
    <h1>Company Name is ${this.companyName}</h1>
    <h3>Catch Phrase is ${this.catchPhrase}</h3>
    </div>
    `
  }
}
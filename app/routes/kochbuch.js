import Route from '@ember/routing/route';

export default class KochbuchRoute extends Route {

  model(){
  return [
        {
        id: 1,
        titel: 'Tofu-Schnitzel',
        bild: 'test',
        content: 'Inhalte der Blba'},
        {
        id: 2,
        titel: 'Saitan-Wurst',
        bild: 'test',
        content: 'Inhalte der Blba'},
        {
        id: 3,
        titel: 'Salat',
        bild: 'test',
        content: 'Inhalte der Blba'},
        {
        id: 4,
        titel: 'Reis mit Soyamilch',
        bild: 'test',
        content: 'Inhalte der Blba'},
        {
        id: 5,
        titel: 'Tomatensalat',
        bild: 'test',
        content: 'Inhalte der Blba'},
        ];
    }
}

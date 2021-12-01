import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";

  showFeatures = true;

  /**
   * Getter for the features property
   */
  toggleSelection(evt) {
    console.dir(evt.target);
    //evt.source.className = 'slds-box slds-box_link slds-box_x-small slds-media 	slds-is-selected';
  }
}

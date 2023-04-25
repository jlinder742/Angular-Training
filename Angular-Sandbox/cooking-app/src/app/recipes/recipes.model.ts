//This will define what a recipe looks like
//Also since this is type script must be EXPLICITLY typed
export class Recipe {
    public name: string;
    public description: string;
    //This will be a path to the image for the recipe Aka a link
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}
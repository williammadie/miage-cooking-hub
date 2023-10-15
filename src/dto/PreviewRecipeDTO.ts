class PreviewRecipeDTO {
  id: string;
  name: string;
  thumbnailUrl: string;

  constructor(id: string, name: string, thumbnail: string) {
    this.id = id;
    this.name = name;
    this.thumbnailUrl = thumbnail;
  }
}

export default PreviewRecipeDTO;
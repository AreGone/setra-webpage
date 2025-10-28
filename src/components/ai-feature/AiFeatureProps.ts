import type TitleGroup from "@/entities/TitleGroup";


export interface AiFeatureProps extends TitleGroup {
  checkedTexts: {text: string, id: number}[];
}

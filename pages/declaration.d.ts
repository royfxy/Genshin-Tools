declare module "*.scss" {
  const content: Record<string, string>
  export default content
}

declare module "*.png"
declare module "*.webp"

declare type Elem =
  | "anemo"
  | "geo"
  | "cryo"
  | "dendro"
  | "electro"
  | "hydro"
  | "pyro"

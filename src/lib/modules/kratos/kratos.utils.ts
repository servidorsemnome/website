export const getNodeAttribute = (flow: any, name: string) =>
  flow?.ui?.nodes?.find((node: any) => node?.attributes?.name == name)
    ?.attributes?.value;

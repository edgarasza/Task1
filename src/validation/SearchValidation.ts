const validateSearch = (query: string) => {
  if (query.match(/[^a-ząčęėįšųūžA-ZĄČĘĖĮŠŲŪŽ0-9]$/g)) {
    return "Search query cannot contain symbols";
  }
  return undefined;
};

export const validate = (
  type: string,
  query: string,
  func: (error: any) => void
) => {
  let error = undefined;
  switch (type) {
    case "search":
      error = validateSearch(query);
      break;

    default:
      return "Error";
  }
  func(error);
  return !error;
};

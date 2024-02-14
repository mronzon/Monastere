import pages from "../data/pages";

export interface Pages {
  id: number;
  name: string;
  root: string;
}

const usePages = () => ({ data: pages, isLoading: false });

export default usePages;

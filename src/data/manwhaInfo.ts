interface Chapter {
  link: string;
  date: string;
  number: string;
}

interface ManwhaInfo {
  description: string;
  chapters: Chapter[];
}

export default ManwhaInfo;

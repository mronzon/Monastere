import requests
from bs4 import BeautifulSoup
from scrapping.scrapping import Scrapping, strip_string


class Asura(Scrapping):

    def __init__(self, url: str, name: str) -> None:
        super().__init__(url, name)
        self.data = []

    def scrap(self):
        result = []
        i = 0
        while True:
            i += 1
            url = f'https://asuratoon.com/manga/?page={i}'
            response = requests.get(url)

            if response.status_code == 200:
                soup = BeautifulSoup(response.text, 'html.parser')
                divs = soup.find_all('div', class_='bs')
                if len(divs) == 0:
                    break
                for div in divs:
                    tmp = {"name": "", "chapter": "", "link": "", "image": ""}
                    text = strip_string(div.text)
                    if "Dropped" in text[0]:
                        continue
                    chapter = text[2].split(" ")[1]
                    tmp["name"] = text[1].strip()
                    tmp["chapter"] = chapter
                    tmp["link"] = div.find('a').get('href')
                    tmp["image"] = div.find('img').get('src')
                    result.append(tmp)
        self.data = result
        return result

    def get_chapter_info(self, url: str):
        result = {"chapters": [], "description": ""}

        response = requests.get(url)

        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            divs = soup.find('div', class_='entry-content entry-content-single')
            ps = divs.find_all('p')
            desc = ""
            for p in ps:
                desc += p.get_text()
            result["description"] = desc
            ul = soup.find('div', id='chapterlist').find('ul')
            lis = ul.find_all('li')
            chapters = []
            for li in lis:
                chapter = {"link": li.find('a').get('href'), "number": li.find("span", class_="chapternum").text,
                           "date": li.find("span", class_="chapterdate").text}
                chapters.append(chapter)
            result["chapters"] = chapters

        else:
            return "ERROR"

        return result


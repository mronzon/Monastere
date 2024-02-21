
class Scrapping:

    def __init__(self, url: str, name) -> None:
        self.url = url
        self.name = name

    def scrap(self):
        pass

    def get_chapter_info(self, url: str):
        pass


def strip_string(text):
    result = []
    text = text.strip()
    tab = text.split("\n")
    for elt in tab:
        if elt.strip() != "":
            result.append(elt)
    return result



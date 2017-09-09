import feedparser from 'feedparser-promised'
import { sequelize } from './database'
import { Item } from './models'

const _main = async (page) => {
  let url = `https://www.thoughtworks.com/rss/insights.xml?page=${page}`;
  const items = await feedparser.parse(url);


  const savedItems = Promise.all(items.map(async x => {
    return await Item.create({
      description: x.description,
      title: x.title,
      categories: x.categories.join(','),
      guid: x.guid,
      pubDate: x.pubdate,
      url: x.link
    })
  }));

  return savedItems;
};

export const main = async () => {
  await sequelize.sync({force: true})
  let page = 1
  while (true) {
    let contents = await _main(page);
    page ++;

    if (contents.length === 0) {
      break
    }
  }
}

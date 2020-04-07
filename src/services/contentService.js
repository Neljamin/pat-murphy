import * as contentful from 'contentful';

class ContentService {
    constructor() {
        this.client = contentful.createClient({
            space: "8cd3fxh9yf0a",
            accessToken: "xbxBHc6rZAKgEHM4grJoOF5lqBaWU7Oius8LRsAaB7E"
        });
    }

    getContent(contentId) {
        return this.client.getEntry(contentId);
    }
}

export default new ContentService();

import axios from 'axios';
const BASE_URL="https://hacker-news.firebaseio.com/v0";
const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_URL}/item/${id}.json`);   
    return story;
  } catch (error) {
    console.log('Somthing Went Wrong!');
  }
};

export const getStories = async (type) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_URL}/${type}stories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 40).map(getStory));
    return stories;
  } catch (error) {
    console.log(error);
  }
};
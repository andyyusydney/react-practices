import React from "react";
import WithSorting from "./sorting";

interface IStoriesList {
  stories: Array<IStory>;
}

export interface IStory {
  id: string;
  title: string;
  author: string;
  created_at: string;
  url: string;
}

const StoriesList = ({stories}: IStoriesList) => {
  return (
    <>
      <h3>Stories</h3>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Created at</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {stories.length > 0 ?
            stories.map((story: IStory) => (
              <tr key={story.id}>
                <td>{story.title}</td>
                <td>{story.author}</td>
                <td>{story.created_at}</td>
                <td>{story.url}</td>
              </tr>
            )) : (
				<tr><td colSpan={4}>No stories</td></tr>
			)}
        </tbody>
      </table>
    </>
  );
};

export default React.memo(WithSorting(StoriesList))

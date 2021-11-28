import React from "react";

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

const StoriesList = (props: IStoriesList) => {
  console.log("props.stories=", props.stories);
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
          {props.stories.length > 0 ?
            props.stories.map((story: IStory) => (
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

export default React.memo(StoriesList);

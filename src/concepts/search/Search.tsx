import React, { useState } from 'react'
import axios from 'axios'
import StoriesList, {IStory} from './StoriesList'
import { v4 as uuidv4 } from 'uuid';

const Search = () => {
	const [keyword, SetKeyword] = useState('')
	const [stories, SetStories] = useState([])

	const handleChange = (e: any) => {
		//console.log('e.target.value=', e.target.value)
		SetKeyword(e.target.value)
	}

	const searchStories = async () => {
		const results = await axios.get(`http://hn.algolia.com/api/v1/search?query=${keyword}`)
		console.log('results.data.hits=', results.data.hits)
		const mappedResults = results.data.hits.map((story: IStory) => {
			return {
				id: uuidv4(),
				title: story.title,
				author: story.author,
				created_at: story.created_at,
				url: story.url
			}

		})
		console.log('mappedResults=', mappedResults)
		SetStories(mappedResults)
	}

	return (
		<>
		<h2>Search Wrapper</h2>
		<input data-testid="keyword" type="input" value={keyword} onChange={handleChange} />
		<button onClick={searchStories}>Search</button>
		<StoriesList stories={stories} />
		</>
	)
}

export default Search
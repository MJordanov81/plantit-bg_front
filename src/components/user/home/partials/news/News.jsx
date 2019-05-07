import React from 'react';

import { Grid , Row , Clearfix } from 'react-bootstrap';

import { HOME, LOREM_IPSUM, RESOLUTIONS } from '../../../../../data/constants/componentConstants';

import newsService from '../../../../../services/news/newsService';
import NewsCard from './partials/NewsCard';

class News extends React.Component {
	constructor (props, context) {
		super(props, context);

		this.state = {
			news: [],
			page: 1,      //3 most recent news
			size: 4,       //3 most recent news

			newsOnRow: 2
		};
	}

	componentDidMount () {
		this.loadNews();
        window.addEventListener('resize', this.handleResolutionChange);

    };


    componentWillUnmount () {
        window.removeEventListener('resize', this.handleResolutionChange);
    }

    handleResolutionChange = () => {

        if (window.innerWidth <= RESOLUTIONS.bootstrapXS) {
            this.setState({newsOnRow: 1})
        }
    };

	loadNews = () => {
		newsService.loadNewsList(this.state)
			.then(res => {
				res.news.forEach(e => {
					if (!e.content) {
						e.content = LOREM_IPSUM
					}

					e.content = e.content.substring(0, 250) + '...'
				});
				this.setState({news: res.news});
			})
			.catch(err => {
				// this.props.history.push('/error');
			});
	};

	render () {

		let news;
        let result = [];

		if (this.state.news.length > 0) {
			news = this.state.news.map(e => {
				return <NewsCard key={e.id} data={e}/>;
			});

            for (let i = 1; i <= news.length; i++) {
                result.push(news[i - 1]);

                if (i % this.state.newsOnRow === 0) {
                    result.push(<Clearfix key={i}/>);
                }
            }
		}


		return (
			<Grid fluid id="home-news" className="">

				<Grid id="news-container">

					<h1 className="section-heading">{HOME.news}</h1>

					<Row className="">
						{result}
					</Row>
				</Grid>

			</Grid>
		);
	}
}

export default News;
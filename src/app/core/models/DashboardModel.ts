import { Url } from 'url';

class FunRoom {
	id: number;
	title: string;
	mode: string;
	map: string;
	max: number;
	current: number;
	join: string;
	copy: string;
}

class CompetitiveRoom {
	title: string;
	cta: {
		title: string;
		link: Url;
	};
	image: Url;
	matches: number;
	win: number;
	lose: number;
}

class User {
	name: string
	id: number;
	expertise: string;
	level: number;
	is_subscriber: boolean;
	patent: Url;
	game_position: Badge;
	feature_medal: Badge;
}

export class DashboardModel {
	online: number;
	latest_banned: string;

	user: User;
	'4fun': {
		title: string;
		image: Url;
		servers: Array<FunRoom>;
	}
	games: Array<CompetitiveRoom>;
}


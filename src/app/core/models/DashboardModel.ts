import { Url } from 'url';

import { CompetitiveRoomModel } from './CompetitiveRoomModel';
import { FunRoomModel } from './FunRoomModel';
import { UserModel } from './UserModel';

export class DashboardModel {
	online: number;
	latest_banned: string;
	user: UserModel;
	'4fun': {
		title: string;
		image: Url;
		servers: Array<FunRoomModel>;
	}
	games: Array<CompetitiveRoomModel>;
}


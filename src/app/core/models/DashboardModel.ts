import { Url } from 'url';

import { CompetitiveRoomModel } from './CompetitiveRoomModel';
import { UserModel } from './UserModel';
import { FunModel } from './FunModel';

export class DashboardModel {
	online: number;
	latest_banned: string;
	user: UserModel;
	'4fun': FunModel;
	games: Array<CompetitiveRoomModel>;
}


import { Url } from 'url';

import { BadgeModel } from './BadgeModel';

export class UserModel {
	name: string
	id: number;
	expertise: string;
	level: number;
	is_subscriber: boolean;
	patent: Url;
	game_position: BadgeModel;
	featured_medal: BadgeModel;
}

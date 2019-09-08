import { Url } from 'url';

import { FunRoomModel } from './FunRoomModel';

export class FunModel {
	title: string;
	image: Url;
	servers: Array<FunRoomModel>;
}

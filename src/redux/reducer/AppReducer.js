import { combineReducers } from 'redux';
import { AuthReducer } from './AuthReducer';
import { ArticleReducer } from './ArticleReducer';
import { CategoryReducer } from './CategoryReducer';
import { UserReducer } from './UserReducer';

export default combineReducers({
    auth: AuthReducer,
    article: ArticleReducer,
    category: CategoryReducer,
    user: UserReducer,
});

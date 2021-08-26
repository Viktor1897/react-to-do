import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, List } from '@material-ui/core';
import { useSelector } from 'react-redux';
import PostListItem from './PostListItem';
import getPosts from '../../services/posts/getPosts.api';
import deletePost from '../../services/posts/deletePost.api';

const useStyles = makeStyles({
    listContainer: {
        maxWidth: "600px",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: "2rem"
    }
  });

export default function PostList() {
    
    const posts = useSelector(state => state.todo.posts);
    const { listContainer } = useStyles();
    
    useEffect(() => getPosts(), [])

    const postsList = posts.map((post, index) => <PostListItem 
    key={index} 
    id={post.id} 
    title={post.title} 
    description={post.description} 
    onDelete={deletePost}/>)

    return (
        <Grid className={listContainer} container spacing={1}>
            <List>
                {postsList}
            </List>
        </Grid>
    )
}
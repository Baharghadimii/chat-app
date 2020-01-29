/* eslint-disable indent */
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export default function AlignItemsList(props) {
  return (
    <List>
      {props.messages.flatMap((item, index) => [(
        <ListItem alignItems="flex-start" key={index}>
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="http://placekitten.com/200/200" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
          />
        </ListItem>
      ), <Divider key={index} variant="inset" component="li" />])}
    </List>
  );
}
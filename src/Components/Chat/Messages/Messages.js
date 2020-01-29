import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export default function AlignItemsList() {
  return (
    <List>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="http://placekitten.com/200/200" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
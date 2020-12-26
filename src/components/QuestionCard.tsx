import React from 'react'
import { Card, CardBody } from 'shards-react'
import { ListGroup, ListGroupItem } from "shards-react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type Props = {
    question: string;
    answer: string[];
    userAnswer: undefined;
    totalQuestions: number;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .list-group': {
              '& span': {
                display: 'inline-block',

                  '& svg': {
                    marginRight: '10px',
                  }
              },
            },
            '& .list-group-item': {
                display: 'inline-block',
                width: '85%',
                cursor: 'pointer',
                borderTop: '1px solid rgba(0,0,0,.125)',
                margin: '7px 0',
                borderRadius: '7px'

            }
        }
    }),
);

const QuestionCard: React.FC = () => {
    const classes = useStyles();


    return (
        <>
            <Card className={classes.root}>
                <CardBody>
                    <h3>Що спричиняє заболочування на великих площах у басейні річки Амазонки?</h3>
                    <ListGroup>

                        {['Answer 1', '2', '3', '4'].map((text, index) => (
                            // <ListItem button key={text}>
                            //     <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            //     <ListItemText primary={text} />
                            // </ListItem>

                            <div >
                               <span  >
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0C8.97156 0 0 8.97156 0 20C0 31.0284 8.97156 40 20 40C31.0284 40 40 31.0284 40 20C40 8.97156 31.0284 0 20 0Z" fill="#CAD2DF"/>
<path d="M30.1367 15.762L19.3033 26.5951C18.9783 26.9201 18.5516 27.0837 18.125 27.0837C17.6984 27.0837 17.2717 26.9201 16.9467 26.5951L11.5302 21.1785C10.8783 20.527 10.8783 19.4735 11.5302 18.822C12.1817 18.1701 13.2349 18.1701 13.8867 18.822L18.125 23.0602L27.7802 13.4054C28.4317 12.7535 29.4849 12.7535 30.1367 13.4054C30.7883 14.0569 30.7883 15.1101 30.1367 15.762Z" fill="#FAFAFA"/>
</svg>
                                </span>
                                <ListGroupItem key={index}>
                                    {text}
                                </ListGroupItem>
                            </div>

                        ))}
                    </ListGroup>
                </CardBody>
            </Card>
        </>

    )
}

export default QuestionCard

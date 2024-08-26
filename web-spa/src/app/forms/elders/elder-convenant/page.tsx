'use client';

import {
  Box,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React, { Fragment } from 'react';

const ElderCovenant = (): JSX.Element => {
  return (
    <Container sx={{ pt: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h3" sx={{ fontWeight: 900 }}>
          Elder Covenant
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 400 }}>
          As the clerk of the board, I invite you to affirm and sign the Elder
          Covenant for 2025. This year, we’re finally getting a little more
          high-tech by allowing you to review the covenant and sign it online.
          Please review the covenant below. To sign the document, simply type
          your name in box and click on the Submit button. The form will use a
          script type face for your signature. The date will be automatically
          set to today’s date. Many thanks for affirming the covenant.
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 400 }}>
          In His name,
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 400 }}>
          Bruce Nichelson Clerk of the Board
        </Typography>

        <Typography variant="h3" sx={{ fontWeight: 900 }}>
          Westover Elder Covenant
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 400 }}>
          <Link
            href="https://www.biblegateway.com/passage/?search=1%20Timothy%203%3A1-7&version=ESV"
            target="_blank"
          >
            1 Timothy 3:1-7
          </Link>
          <br />
          Here is a trustworthy saying: Whoever aspires to be an overseer
          desires a noble task. Now the overseer is to be above reproach,
          faithful to his wife, temperate, self-controlled, respectable,
          hospitable, able to teach, not given to drunkenness, not violent but
          gentle, not quarrelsome, not a lover of money. He must manage his own
          family well and see that his children obey him, and he must do so in a
          manner worthy of full respect. (If anyone does not know how to manage
          his own family, how can he take care of God’s church?) He must not be
          a recent convert, or he may become conceited and fall under the same
          judgment as the devil. He must also have a good reputation with
          outsiders, so that he will not fall into disgrace and into the devil’s
          trap.
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 400 }}>
          <Link
            href="https://www.biblegateway.com/passage/?search=Titus%201%3A5-9&version=ESV"
            target="_blank"
          >
            Titus 1:5-9
          </Link>
          <br />
          The reason I left you in Crete was that you might put in order what
          was left unfinished and appoint elders in every town, as I directed
          you. An elder must be blameless, faithful to his wife, a man whose
          children believe and are not open to the charge of being wild and
          disobedient. Since an overseer manages God’s household, he must be
          blameless—not overbearing, not quick-tempered, not given to
          drunkenness, not violent, not pursuing dishonest gain. Rather, he must
          be hospitable, one who loves what is good, who is self-controlled,
          upright, holy and disciplined. He must hold firmly to the trustworthy
          message as it has been taught, so that he can encourage others by
          sound doctrine and refute those who oppose it.
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          Per Article IV Section 2 in the Constitution, I have read and
          understand the qualifications for elder as outlined in the above
          scriptures 1 Timothy 3:1-7 and Titus 1:5-9. As an elder of Westover
          Church, I agree to:
          <List>
            <ListItem>
              wholeheartedly accept the Articles of Faith as contained in the
              Constitution
            </ListItem>
            <ListItem>
              be exemplary in my general Christian conduct, and
            </ListItem>
            <ListItem>
              be devoted in myattendance and service to Westover Church.
            </ListItem>
          </List>
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          By signing below, I understand that a qualification to be an elder
          (ruling or non-ruling) is contingent upon the annual renewal of this
          covenant.
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          Please type your name in the box below:
        </Typography>
      </Stack>
    </Container>
  );
};

export default ElderCovenant;

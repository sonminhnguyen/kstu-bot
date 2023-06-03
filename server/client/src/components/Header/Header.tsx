import React, { useState, useContext, useRef } from 'react';
import {
  Dropdown,
  Popover,
  Whisper,
  WhisperInstance,
  Stack,
  Badge,
  Avatar,
  IconButton,
  List,
  Button
} from 'rsuite';
import NoticeIcon from '@rsuite/icons/Notice';
import HelpOutlineIcon from '@rsuite/icons/HelpOutline';
// import { useSignOut } from "react-auth-kit";
// import WechatIcon from '@rsuite/icons/Wechat';
// import HeartIcon from '@rsuite/icons/legacy/HeartO';
import logo from '../logo.jpg';
import { FaVk, FaCommentAlt } from 'react-icons/fa';
import { AuthContext } from '@/context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import ModalEditRow from './ModalEditRow';
import ModalFeedback from './ModalFeedback';

const Header = () => {
  const trigger = useRef<WhisperInstance>(null);
  const { auth, deleteAuth } = useContext(AuthContext);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalFeedback, setShowModalFeedback] = useState(false);
  const navigate = useNavigate();

  const renderAdminSpeaker = ({ onClose, left, top, className }: any, ref) => {
    const handleSelect = eventKey => {
      onClose();
      if (eventKey === 1) {
        setShowModalEdit(true);
      } else if (eventKey === 2) {
        setShowModalFeedback(true);
      }
    };

    const logout = () => {
      deleteAuth();
      navigate('/sign-in', { replace: true });
    };

    return (
      <Popover ref={ref} className={className} style={{ left, top }} full>
        <Dropdown.Menu onSelect={handleSelect}>
          <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
            <p style={{ textAlign: 'left' }}>Signed in as</p>
            <strong>{auth.user.username}</strong>
          </Dropdown.Item>
          <Dropdown.Item divider />
          <Dropdown.Item eventKey={1}>Profile & account</Dropdown.Item>
          <Dropdown.Item eventKey={2}>Feedback</Dropdown.Item>
          <Dropdown.Item divider />
          <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
          <Dropdown.Item
            icon={<HelpOutlineIcon />}
            href="https://rsuitejs.com"
            target="_blank"
            as="a"
          >
            Help{' '}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Popover>
    );
  };

  return (
    <Stack className="header" spacing={8}>
      {auth?.user?.role === 'admin' ? (
        <div>
          <IconButton
            icon={<FaVk style={{ fontSize: 20 }} />}
            href="https://vk.com/kstubot"
            target="_blank"
          />
          <IconButton
            icon={<FaCommentAlt style={{ fontSize: 20 }} />}
            href="https://vk.com/gim207360925"
            target="_blank"
          />
        </div>
      ) : (
        <></>
      )}
      <Whisper placement="bottomEnd" trigger="click" ref={trigger} speaker={renderNoticeSpeaker}>
        <IconButton
          icon={
            <Badge content={5}>
              <NoticeIcon style={{ fontSize: 20 }} />
            </Badge>
          }
        />
      </Whisper>
      <Whisper placement="bottomEnd" trigger="click" ref={trigger} speaker={renderAdminSpeaker}>
        <Avatar size="sm" circle src={logo} alt="@sonnguyen" style={{ marginLeft: 8 }} />
      </Whisper>
      <ModalEditRow
        rowData={auth.user}
        open={showModalEdit}
        onClose={() => setShowModalEdit(false)}
      />
      <ModalFeedback open={showModalFeedback} onClose={() => setShowModalFeedback(false)} />
    </Stack>
  );
};

const renderNoticeSpeaker = ({ onClose, left, top, className }: any, ref) => {
  const notifications = [
    ['7 hours ago', 'You have new message.'],
    ['13 hours ago', 'You have new message.'],
    ['2 days ago', 'You have new notification.'],
    ['3 days ago', 'John had commented on your post.']
  ];

  return (
    <Popover ref={ref} className={className} style={{ left, top, width: 300 }} title="Last updates">
      <List>
        {notifications.map((item, index) => {
          const [time, content] = item;
          return (
            <List.Item key={index}>
              <Stack spacing={4}>
                <Badge /> <span style={{ color: '#57606a' }}>{time}</span>
              </Stack>

              <p>{content}</p>
            </List.Item>
          );
        })}
      </List>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <Button onClick={onClose}>More notifications</Button>
      </div>
    </Popover>
  );
};

export default Header;

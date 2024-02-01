import React, { useState } from 'react';
import Menuitems from './MenuItems';
import { useLocation } from 'react-router';
import { Box, List } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavItem from './NavItem';
import NavGroup from './NavGroup/NavGroup';
import LogoutConfirmationModal from 'src/components/modal/LogoutConfirmationModal';
import { signOut } from 'src/helpers/authHelper';
import { toast } from 'react-toastify';
import LoadingModal from 'src/components/loading/LoadingModal';
import { useDispatch } from 'react-redux';

const SidebarItems = () => {
  const { pathname } = useLocation();
  const pathDirect = pathname;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // State to control the logout modal

  const handleLogout = () => {
    setIsLogoutModalOpen(true); // Open the logout confirmation modal
  };

  const confirmLogout = async () => {
    try {
      setLoading(true);
      await signOut();
      dispatch({ type: 'SET_PROFILE', payload: null });
      setLoading(false);
      navigate('/login');
    } catch (error) {
      toast.error('התנתקות נכשלה');
    }
  };

  return (
    <Box sx={{ px: 3, direction: (theme) => theme.direction }}>
      <List sx={{ pt: 0, direction: (theme) => theme.direction }} className="sidebarNav">
        {Menuitems.map((item) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return <NavGroup item={item} key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else {
            return (
              <NavItem
                item={item}
                key={item.id}
                pathDirect={pathDirect}
                isLogout={item.isLogout}
                onClick={item.isLogout ? handleLogout : undefined} // Handle logout confirmation modal
              />
            );
          }
        })}
      </List>

      {/* Render the LogoutConfirmationModal */}
      <LogoutConfirmationModal
        open={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={confirmLogout}
      />
      <LoadingModal open={loading} text={'מתנתק...'} />
    </Box>
  );
};
export default SidebarItems;

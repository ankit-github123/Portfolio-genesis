import { Drawer } from "@common-ui/Drawer";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
} from "@mui/material";
import { useCallback, useState } from "react";

const CustomDialog = styled(Dialog)(({ theme }) => {
  return {
    "& .MuiDialog-paper": {
      backgroundColor: `${theme.palette.background.primary}`,
      // height: "80vh",
    },
  };
});

export const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const ModalComponent = ({ content, footer }) => {
    return (
      <div>
        {isModalVisible && (
          <CustomDialog
            maxWidth="xl"
            // className="h-[80vh]"
            open={isModalVisible}
            onClose={hideModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              <div
                href={"/newportfolio"}
                className="flex items-center justify-center gap-2 mx-2 my-1"
              >
                <div className="w-16 h-16">
                  <img src="/images/common/logo.svg" />
                </div>
                <div className="text-[25px] tracking-widest">
                  Portfolio Genesis
                </div>
              </div>
            </DialogTitle>
            <DialogContent>
              {content}
              {/* <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div> */}
            </DialogContent>
            <DialogActions>{footer}</DialogActions>
          </CustomDialog>
        )}
      </div>
    );
  };
  return {
    isModalVisible,
    showModal,
    hideModal,
    ModalComponent,
  };
};

export const useDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = useCallback(() => setOpen(true), []);

  const handleDrawerClose = useCallback(() => setOpen(false), []);

  const DrawerComponent = ({ content }) => {
    return (
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
        content={content}
      />
    );
  };

  return {
    handleDrawerOpen,
    handleDrawerClose,
    DrawerComponent,
  };
};

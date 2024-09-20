/* eslint-disable no-nested-ternary */
// import { useState } from 'react';
// // @mui
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import { styled, alpha } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import TextField from '@mui/material/TextField';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import Box from '@mui/material/Box';
// import Step from '@mui/material/Step';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
// import Stepper from '@mui/material/Stepper';
// import StepLabel from '@mui/material/StepLabel';
// import Typography from '@mui/material/Typography';
// import { StepIconProps } from '@mui/material/StepIcon';
// import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
// // hooks
// import { useBoolean } from 'src/hooks/use-boolean';
// // theme
// import { bgGradient } from 'src/theme/css';
// // components
// import Iconify from 'src/components/iconify';
// import { Avatar, Collapse, Tooltip } from '@mui/material';

// // ----------------------------------------------------------------------
// const STEPS = ['Type Selection', 'Configuration', 'Done'];

// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 10,
//     left: 'calc(-50% + 16px)',
//     right: 'calc(50% + 16px)',
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: theme.palette.success.main,
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: theme.palette.success.main,
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     borderRadius: 1,
//     borderTopWidth: 3,
//     borderColor: theme.palette.divider,
//   },
// }));

// const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
//   ({ theme, ownerState }) => ({
//     height: 22,
//     display: 'flex',
//     alignItems: 'center',
//     color: theme.palette.text.disabled,
//     ...(ownerState.active && {
//       color: theme.palette.success.main,
//     }),
//     '& .QontoStepIcon-completedIcon': {
//       zIndex: 1,
//       fontSize: 18,
//       color: theme.palette.success.main,
//     },
//     '& .QontoStepIcon-circle': {
//       width: 8,
//       height: 8,
//       borderRadius: '50%',
//       backgroundColor: 'currentColor',
//     },
//   })
// );

// function QontoStepIcon(props: StepIconProps) {
//   const { active, completed, className } = props;

//   return (
//     <QontoStepIconRoot ownerState={{ active }} className={className}>
//       {completed ? (
//         <Iconify
//           icon="eva:checkmark-fill"
//           className="QontoStepIcon-completedIcon"
//           width={24}
//           height={24}
//         />
//       ) : (
//         <div className="QontoStepIcon-circle" />
//       )}
//     </QontoStepIconRoot>
//   );
// }

// const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 22,
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       ...bgGradient({
//         startColor: theme.palette.success.light,
//         endColor: theme.palette.success.main,
//       }),
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       ...bgGradient({
//         startColor: theme.palette.success.light,
//         endColor: theme.palette.success.main,
//       }),
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     height: 3,
//     border: 0,
//     borderRadius: 1,
//     backgroundColor: theme.palette.divider,
//   },
// }));

// const ColorlibStepIconRoot = styled('div')<{
//   ownerState: { completed?: boolean; active?: boolean };
// }>(({ theme, ownerState }) => ({
//   zIndex: 1,
//   width: 50,
//   height: 50,
//   display: 'flex',
//   borderRadius: '50%',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: theme.palette.text.disabled,
//   backgroundColor:
//     theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
//   ...(ownerState.active && {
//     boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
//     color: theme.palette.common.white,
//     ...bgGradient({
//       startColor: theme.palette.success.light,
//       endColor: theme.palette.success.main,
//     }),
//   }),
//   ...(ownerState.completed && {
//     color: theme.palette.common.white,
//     ...bgGradient({
//       startColor: theme.palette.success.light,
//       endColor: theme.palette.success.main,
//     }),
//   }),
// }));

// function ColorlibStepIcon(props: StepIconProps) {
//   const { active, completed, className, icon } = props;

//   const icons: { [index: string]: React.ReactElement } = {
//     1: <Iconify icon="ic:outline-source" width={24} />,
//     2: <Iconify icon="eva:settings-2-outline" width={24} />,
//     3: <Iconify icon="lets-icons:done-ring-round" width={24} />,
//   };

//   return (
//     <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
//       {icons[String(icon)]}
//     </ColorlibStepIconRoot>
//   );
// }

// function getStepContent(step: number, selectedType: string | null) {
//   switch (step) {
//     case 1:
//       if (selectedType === 'Database') {
//         return (
//           <Box>
//             <TextField label="Display Name" fullWidth margin="normal" />
//             <TextField label="Database Name" fullWidth margin="normal" />
//             <TextField label="Host" fullWidth margin="normal" />
//             <TextField label="Port" fullWidth margin="normal" />
//             <TextField label="Username" fullWidth margin="normal" />
//             <TextField label="Password" type="password" fullWidth margin="normal" />
//           </Box>
//         );
//       }
//       if (selectedType === 'File') {
//         return (
//           <Box>
//             <TextField label="Display Name" fullWidth margin="normal" />
//             <TextField label="File Link" fullWidth margin="normal" />
//             <TextField label="Upload File" fullWidth margin="normal" />
//           </Box>
//         );
//       }
//       return 'Please select a type of data source.';
//     case 2:
//       return (
//         <Box textAlign="center">
//           <img
//             alt="Assurances"
//             src="/assets/icons/faqs/ic_assurances.svg"
//             style={{ marginBottom: '8px', width: '200px', height: '200px' }}
//           />
//           <Typography variant="h6">Your datasource was created successfully!</Typography>
//         </Box>
//       );
//     default:
//       return 'Unknown step';
//   }
// }

// export default function SteppersDialog() {
//   const dialog = useBoolean();
//   const [activeStep, setActiveStep] = useState(0);
//   const [selectedType, setSelectedType] = useState<string | null>(null);
//   const [openList, setOpenList] = useState<string | null>(null);

//   const handleNext = () => {
//     setOpenList(null);
//     if (activeStep === STEPS.length - 1) {
//       dialog.onFalse();
//       resetStepper();
//     } else {
//       setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     }
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleSelectType = (type: string) => {
//     setSelectedType(type);
//     handleNext();
//   };

//   const resetStepper = () => {
//     setActiveStep(0);
//     setSelectedType(null);
//     setOpenList(null); // Close all open lists
//   };

//   const handleClose = () => {
//     dialog.onFalse();
//     resetStepper();
//   };
//   const handleClickDatabase = () => {
//     setOpenList(openList === 'database' ? null : 'database');
//   };

//   const handleClickFile = () => {
//     setOpenList(openList === 'file' ? null : 'file');
//   };
//   return (
//     <div>
//       <Button
//         variant="contained"
//         startIcon={<Iconify icon="ep:circle-plus-filled" />}
//         onClick={dialog.onTrue}
//       >
//         data source
//       </Button>

//       <Dialog
//         open={dialog.value}
//         onClose={handleClose}
//         maxWidth="md"
//         fullWidth
//         sx={{
//           '& .MuiDialog-paper': {
//             width: '100%',
//             maxWidth: 'md',
//           },
//         }}
//       >
//         <DialogTitle>Create a new data source</DialogTitle>

//         <DialogContent>
//           <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
//             {STEPS.map((label) => (
//               <Step key={label}>
//                 <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>

//           <Paper
//             sx={{
//               p: 3,
//               px: 8,
//               my: 3,
//               minHeight: 120,
//             }}
//           >
//             {activeStep === 0 ? (
//               <List>
//                 <ListItem
//                   button
//                   onClick={handleClickDatabase}
//                   sx={{
//                     borderRadius: 2,
//                     '&:hover': {
//                       transform: 'translateX(5px)',
//                       transition: 'transform 0.2s ease-in-out',
//                     },
//                   }}
//                 >
//                   <Avatar>
//                     <Iconify icon="mdi:database-cog" width={24} />
//                   </Avatar>
//                   <ListItemText sx={{ ml: 1 }} primary="Database" />
//                   <ListItemIcon>
//                     {openList ? (
//                       <Iconify icon="eva:arrow-ios-upward-fill" />
//                     ) : (
//                       <Iconify icon="eva:arrow-ios-downward-fill" />
//                     )}
//                   </ListItemIcon>
//                 </ListItem>
//                 <Collapse in={openList === 'database'} timeout="auto" unmountOnExit>
//                   <List component="div" disablePadding>
//                     <ListItem
//                       button
//                       sx={{ pl: 4, borderRadius: 2 }}
//                       onClick={() => handleSelectType('Database')}
//                     >
//                       <Tooltip key="mysql" title="mysql">
//                         <Box
//                           component="img"
//                           alt="mysql"
//                           src="/assets/icons/app/ic_mysql.svg"
//                           sx={{
//                             width: 30,
//                             height: 30,
//                             mr: 1,
//                           }}
//                         />
//                       </Tooltip>
//                       <ListItemText primary="MySQL" />
//                     </ListItem>
//                     <ListItem
//                       button
//                       sx={{ pl: 4, borderRadius: 2 }}
//                       onClick={() => handleSelectType('Database')}
//                     >
//                       <Tooltip key="postgres" title="postgres">
//                         <Box
//                           component="img"
//                           alt="postgres"
//                           src="/assets/icons/app/ic_postgresql.svg"
//                           sx={{
//                             width: 30,
//                             height: 30,
//                             mr: 1,
//                           }}
//                         />
//                       </Tooltip>
//                       <ListItemText primary="PostgreSQL" />
//                     </ListItem>
//                     <ListItem
//                       button
//                       sx={{ pl: 4, borderRadius: 2 }}
//                       onClick={() => handleSelectType('Database')}
//                     >
//                       <Tooltip key="sqlServer" title="sqlServer">
//                         <Box
//                           component="img"
//                           alt="sqlServer"
//                           src="/assets/icons/app/ic_sqlServer.svg"
//                           sx={{
//                             width: 30,
//                             height: 30,
//                             mr: 1,
//                           }}
//                         />
//                       </Tooltip>
//                       <ListItemText primary="SQL Server" />
//                     </ListItem>
//                   </List>
//                 </Collapse>

//                 <ListItem
//                   button
//                   onClick={handleClickFile}
//                   sx={{
//                     mt: 1,
//                     borderRadius: 2,
//                     '&:hover': {
//                       transform: 'translateX(5px)',
//                       transition: 'transform 0.2s ease-in-out',
//                     },
//                   }}
//                 >
//                   <Avatar>
//                     <Iconify icon="basil:file-solid" width={24} />
//                   </Avatar>
//                   <ListItemText sx={{ ml: 1 }} primary="File" />
//                   <ListItemIcon>
//                     {openList ? (
//                       <Iconify icon="eva:arrow-ios-upward-fill" />
//                     ) : (
//                       <Iconify icon="eva:arrow-ios-downward-fill" />
//                     )}
//                   </ListItemIcon>
//                 </ListItem>
//                 <Collapse in={openList === 'file'} timeout="auto" unmountOnExit>
//                   <List component="div" disablePadding>
//                     <ListItem
//                       button
//                       sx={{ pl: 4, borderRadius: 2 }}
//                       onClick={() => handleSelectType('File')}
//                     >
//                       <Tooltip key="text" title="text">
//                         <Box
//                           component="img"
//                           alt="text"
//                           src="/assets/icons/files/ic_txt.svg"
//                           sx={{
//                             width: 25,
//                             height: 25,
//                             mr: 1,
//                           }}
//                         />
//                       </Tooltip>
//                       <ListItemText primary="Text File" />
//                     </ListItem>
//                     <ListItem
//                       button
//                       sx={{ pl: 4, borderRadius: 2 }}
//                       onClick={() => handleSelectType('File')}
//                     >
//                       <Tooltip key="excel" title="excel">
//                         <Box
//                           component="img"
//                           alt="excel"
//                           src="/assets/icons/files/ic_excel.svg"
//                           sx={{
//                             width: 25,
//                             height: 25,
//                             mr: 1,
//                           }}
//                         />
//                       </Tooltip>
//                       <ListItemText primary="Excel" />
//                     </ListItem>
//                     <ListItem
//                       button
//                       sx={{ pl: 4, borderRadius: 2 }}
//                       onClick={() => handleSelectType('File')}
//                     >
//                       <Tooltip key="pdf" title="pdf">
//                         <Box
//                           component="img"
//                           alt="pdf"
//                           src="/assets/icons/files/ic_pdf.svg"
//                           sx={{
//                             width: 25,
//                             height: 25,
//                             mr: 1,
//                           }}
//                         />
//                       </Tooltip>
//                       <ListItemText primary="PDF" />
//                     </ListItem>
//                     <ListItem
//                       button
//                       sx={{ pl: 4, borderRadius: 2 }}
//                       onClick={() => handleSelectType('File')}
//                     >
//                       <Tooltip key="csv" title="csv">
//                         <Box
//                           component="img"
//                           alt="csv"
//                           src="/assets/icons/files/ic_csv.svg"
//                           sx={{
//                             width: 25,
//                             height: 25,
//                             mr: 1,
//                           }}
//                         />
//                       </Tooltip>
//                       <ListItemText primary="Sheet" />
//                     </ListItem>
//                     <ListItem
//                       button
//                       sx={{ pl: 4, borderRadius: 2 }}
//                       onClick={() => handleSelectType('File')}
//                     >
//                       <Tooltip key="word" title="word">
//                         <Box
//                           component="img"
//                           alt="word"
//                           src="/assets/icons/files/ic_word.svg"
//                           sx={{
//                             width: 25,
//                             height: 25,
//                             mr: 1,
//                           }}
//                         />
//                       </Tooltip>
//                       <ListItemText primary="Word" />
//                     </ListItem>
//                   </List>
//                 </Collapse>
//               </List>
//             ) : (
//               getStepContent(activeStep, selectedType)
//             )}
//           </Paper>
//         </DialogContent>

//         <DialogActions>
//           {activeStep > 0 && (
//             <Box sx={{ textAlign: 'right' }}>
//               <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
//                 Back
//               </Button>
//               <Button variant="contained" onClick={handleNext} sx={{ mr: 1 }}>
//                 {activeStep === STEPS.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </Box>
//           )}
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
import { useState } from 'react';
// @mui
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { styled, alpha } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { StepIconProps } from '@mui/material/StepIcon';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// theme
import { bgGradient } from 'src/theme/css';
// components
import Iconify from 'src/components/iconify';
import { Avatar, Collapse, Tooltip } from '@mui/material';

// ... (keep all the styled components and icons as they were)

const STEPS = ['Type Selection', 'Configuration', 'Done'];
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      ...bgGradient({
        startColor: theme.palette.success.light,
        endColor: theme.palette.success.main,
      }),
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      ...bgGradient({
        startColor: theme.palette.success.light,
        endColor: theme.palette.success.main,
      }),
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    borderRadius: 1,
    backgroundColor: theme.palette.divider,
  },
}));
const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  zIndex: 1,
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.disabled,
  backgroundColor:
    theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
  ...(ownerState.active && {
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    color: theme.palette.common.white,
    ...bgGradient({
      startColor: theme.palette.success.light,
      endColor: theme.palette.success.main,
    }),
  }),
  ...(ownerState.completed && {
    color: theme.palette.common.white,
    ...bgGradient({
      startColor: theme.palette.success.light,
      endColor: theme.palette.success.main,
    }),
  }),
}));
function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className, icon } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <Iconify icon="ic:outline-source" width={24} />,
    2: <Iconify icon="eva:settings-2-outline" width={24} />,
    3: <Iconify icon="lets-icons:done-ring-round" width={24} />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
}
export default function SteppersDialog() {
  const dialog = useBoolean();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedType, setSelectedType] = useState(null);
  const [openList, setOpenList] = useState<any>(null);
  const [formData, setFormData] = useState<any>({
    displayName: '',
    databaseName: '',
    host: '',
    port: '',
    username: '',
    password: '',
    fileLink: '',
    file: null,
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const resetState = () => {
    setActiveStep(0);
    setSelectedType(null);
    setOpenList(null);
    setFormData({
      displayName: '',
      databaseName: '',
      host: '',
      port: '',
      username: '',
      password: '',
      fileLink: '',
      file: null,
    });
    setErrors({});
    setIsSubmitting(false);
  };
  const handleNext = () => {
    if (activeStep === 1) {
      if (validateForm()) {
        submitForm();
      }
    } else if (activeStep === STEPS.length - 1) {
      dialog.onFalse();
      resetStepper();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep === 1) {
      resetState();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleSelectType = (type: any) => {
    setSelectedType(type);
    handleNext();
  };

  const resetStepper = () => {
    setActiveStep(0);
    setSelectedType(null);
    setOpenList(null);
    setFormData({
      displayName: '',
      databaseName: '',
      host: '',
      port: '',
      username: '',
      password: '',
      fileLink: '',
      file: null,
    });
    setErrors({});
  };

  const handleClose = () => {
    dialog.onFalse();
    resetStepper();
    resetState();
  };

  const handleClickDatabase = () => {
    setOpenList(openList === 'database' ? null : 'database');
  };

  const handleClickFile = () => {
    setOpenList(openList === 'file' ? null : 'file');
  };

  const handleInputChange = (e: any) => {
    const { name, value, files } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {} as any;
    if (!formData.displayName.trim()) {
      newErrors.displayName = 'Display Name is required';
    }
    if (selectedType === 'Database') {
      if (!formData.databaseName.trim()) newErrors.databaseName = 'Database Name is required';
      if (!formData.host.trim()) newErrors.host = 'Host is required';
      if (!formData.port.trim()) newErrors.port = 'Port is required';
      if (!formData.username.trim()) newErrors.username = 'Username is required';
      if (!formData.password) newErrors.password = 'Password is required';
    } else if (selectedType === 'File') {
      if (!formData.fileLink.trim() && !formData.file) {
        newErrors.file = 'Either File Link or File Upload is required';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    try {
      if (selectedType === 'Database') {
        const response = await fetch('http://192.168.11.174:5000/set_db_settings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // displayName: formData.displayName,
            host: formData.host,
            port: formData.port,
            user: formData.username,
            password: formData.password,
            dbname: formData.databaseName,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to submit database settings');
        }

        const result = await response.json();
        console.log('API response:', result);

        // If submission is successful, move to the next step
        setActiveStep((prevStep) => prevStep + 1);
      } else if (selectedType === 'File') {
        // Handle file submission if needed
        console.log('File submission not implemented yet');
        // For now, we'll just move to the next step
        setActiveStep((prevStep) => prevStep + 1);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to submit the form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepContent = (step: any) => {
    switch (step) {
      case 0:
        return (
          <List>
            <ListItem
              button
              onClick={handleClickDatabase}
              sx={{
                borderRadius: 2,
                '&:hover': {
                  transform: 'translateX(5px)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
            >
              <Avatar>
                <Iconify icon="mdi:database-cog" width={24} />
              </Avatar>
              <ListItemText sx={{ ml: 1 }} primary="Database" />
              <ListItemIcon>
                {openList === 'database' ? (
                  <Iconify icon="eva:arrow-ios-upward-fill" />
                ) : (
                  <Iconify icon="eva:arrow-ios-downward-fill" />
                )}
              </ListItemIcon>
            </ListItem>
            <Collapse in={openList === 'database'} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  sx={{ pl: 4, borderRadius: 2 }}
                  onClick={() => handleSelectType('Database')}
                >
                  <Tooltip key="mysql" title="mysql">
                    <Box
                      component="img"
                      alt="mysql"
                      src="/assets/icons/app/ic_mysql.svg"
                      sx={{
                        width: 30,
                        height: 30,
                        mr: 1,
                      }}
                    />
                  </Tooltip>
                  <ListItemText primary="MySQL" />
                </ListItem>
                <ListItem
                  button
                  sx={{ pl: 4, borderRadius: 2 }}
                  onClick={() => handleSelectType('Database')}
                >
                  <Tooltip key="postgres" title="postgres">
                    <Box
                      component="img"
                      alt="postgres"
                      src="/assets/icons/app/ic_postgresql.svg"
                      sx={{
                        width: 30,
                        height: 30,
                        mr: 1,
                      }}
                    />
                  </Tooltip>
                  <ListItemText primary="PostgreSQL" />
                </ListItem>
                <ListItem
                  button
                  sx={{ pl: 4, borderRadius: 2 }}
                  onClick={() => handleSelectType('Database')}
                >
                  <Tooltip key="sqlServer" title="sqlServer">
                    <Box
                      component="img"
                      alt="sqlServer"
                      src="/assets/icons/app/ic_sqlServer.svg"
                      sx={{
                        width: 30,
                        height: 30,
                        mr: 1,
                      }}
                    />
                  </Tooltip>
                  <ListItemText primary="SQL Server" />
                </ListItem>
              </List>
            </Collapse>

            <ListItem
              button
              onClick={handleClickFile}
              sx={{
                mt: 1,
                borderRadius: 2,
                '&:hover': {
                  transform: 'translateX(5px)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
            >
              <Avatar>
                <Iconify icon="basil:file-solid" width={24} />
              </Avatar>
              <ListItemText sx={{ ml: 1 }} primary="File" />
              <ListItemIcon>
                {openList === 'file' ? (
                  <Iconify icon="eva:arrow-ios-upward-fill" />
                ) : (
                  <Iconify icon="eva:arrow-ios-downward-fill" />
                )}
              </ListItemIcon>
            </ListItem>
            <Collapse in={openList === 'file'} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  sx={{ pl: 4, borderRadius: 2 }}
                  onClick={() => handleSelectType('File')}
                >
                  <Tooltip key="text" title="text">
                    <Box
                      component="img"
                      alt="text"
                      src="/assets/icons/files/ic_txt.svg"
                      sx={{
                        width: 25,
                        height: 25,
                        mr: 1,
                      }}
                    />
                  </Tooltip>
                  <ListItemText primary="Text File" />
                </ListItem>
                <ListItem
                  button
                  sx={{ pl: 4, borderRadius: 2 }}
                  onClick={() => handleSelectType('File')}
                >
                  <Tooltip key="excel" title="excel">
                    <Box
                      component="img"
                      alt="excel"
                      src="/assets/icons/files/ic_excel.svg"
                      sx={{
                        width: 25,
                        height: 25,
                        mr: 1,
                      }}
                    />
                  </Tooltip>
                  <ListItemText primary="Excel" />
                </ListItem>
                <ListItem
                  button
                  sx={{ pl: 4, borderRadius: 2 }}
                  onClick={() => handleSelectType('File')}
                >
                  <Tooltip key="pdf" title="pdf">
                    <Box
                      component="img"
                      alt="pdf"
                      src="/assets/icons/files/ic_pdf.svg"
                      sx={{
                        width: 25,
                        height: 25,
                        mr: 1,
                      }}
                    />
                  </Tooltip>
                  <ListItemText primary="PDF" />
                </ListItem>
                <ListItem
                  button
                  sx={{ pl: 4, borderRadius: 2 }}
                  onClick={() => handleSelectType('File')}
                >
                  <Tooltip key="csv" title="csv">
                    <Box
                      component="img"
                      alt="csv"
                      src="/assets/icons/files/ic_csv.svg"
                      sx={{
                        width: 25,
                        height: 25,
                        mr: 1,
                      }}
                    />
                  </Tooltip>
                  <ListItemText primary="Sheet" />
                </ListItem>
                <ListItem
                  button
                  sx={{ pl: 4, borderRadius: 2 }}
                  onClick={() => handleSelectType('File')}
                >
                  <Tooltip key="word" title="word">
                    <Box
                      component="img"
                      alt="word"
                      src="/assets/icons/files/ic_word.svg"
                      sx={{
                        width: 25,
                        height: 25,
                        mr: 1,
                      }}
                    />
                  </Tooltip>
                  <ListItemText primary="Word" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        );
      case 1:
        return (
          <Box>
            <TextField
              label="Display Name"
              name="displayName"
              value={formData.displayName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              error={!!errors.displayName}
              helperText={errors.displayName}
            />
            {selectedType === 'Database' && (
              <>
                <TextField
                  label="Database Name"
                  name="databaseName"
                  value={formData.databaseName}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  error={!!errors.databaseName}
                  helperText={errors.databaseName}
                />
                <TextField
                  label="Host"
                  name="host"
                  value={formData.host}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  error={!!errors.host}
                  helperText={errors.host}
                />
                <TextField
                  label="Port"
                  name="port"
                  value={formData.port}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  error={!!errors.port}
                  helperText={errors.port}
                />
                <TextField
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  error={!!errors.username}
                  helperText={errors.username}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  error={!!errors.password}
                  helperText={errors.password}
                />
              </>
            )}
            {selectedType === 'File' && (
              <>
                <TextField
                  label="File Link"
                  name="fileLink"
                  value={formData.fileLink}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  error={!!errors.file}
                  helperText={errors.file}
                />
                <input
                  type="file"
                  name="file"
                  onChange={handleInputChange}
                  style={{ marginTop: '16px' }}
                />
              </>
            )}
            {errors.submit && (
              <Typography color="error" sx={{ mt: 2 }}>
                {errors.submit}
              </Typography>
            )}
          </Box>
        );
      case 2:
        return (
          <Box textAlign="center">
            <img
              alt="Assurances"
              src="/assets/icons/faqs/ic_assurances.svg"
              style={{ marginBottom: '8px', width: '200px', height: '200px' }}
            />
            <Typography variant="h6">Your datasource was created successfully!</Typography>
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<Iconify icon="ep:circle-plus-filled" />}
        onClick={dialog.onTrue}
      >
        data source
      </Button>

      <Dialog
        open={dialog.value}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            width: '100%',
            maxWidth: 'md',
          },
        }}
      >
        <DialogTitle>Create a new data source</DialogTitle>

        <DialogContent>
          <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
            {STEPS.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Paper
            sx={{
              p: 3,
              my: 3,
              minHeight: 120,
            }}
          >
            {getStepContent(activeStep)}
          </Paper>
        </DialogContent>

        <DialogActions>
          <Box sx={{ flex: '1 1 auto' }} />
          {activeStep !== 0 && (
            <Button onClick={handleBack} sx={{ mr: 1 }} disabled={isSubmitting}>
              Back
            </Button>
          )}
          {activeStep === 0 ? (
            <></>
          ) : (
            <Button variant="contained" onClick={handleNext} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : activeStep === STEPS.length - 1 ? 'Finish' : 'Next'}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}

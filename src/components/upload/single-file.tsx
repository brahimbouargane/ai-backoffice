import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
// utils
import { fData } from 'src/utils/format-number';
//
import Iconify from '../iconify';
import { varFade } from '../animate';
import FileThumbnail, { fileData } from '../file-thumbnail';
//
import { UploadProps } from './types';

// ----------------------------------------------------------------------

interface SingleFileUploadProps extends UploadProps {
  file: File | string;
  onRemove: () => void;
  sx?: object;
}

export default function SingleFileUpload({ file, onRemove, sx }: any) {
  const { key, name = '', size = 0 } = fileData(file);

  const isNotFormatFile = typeof file === 'string';

  return (
    <Stack
      component={m.div}
      {...varFade().inUp}
      alignItems="center"
      display="inline-flex"
      justifyContent="center"
      sx={{
        m: 0.5,
        width: 80,
        height: 80,
        borderRadius: 1.25,
        overflow: 'hidden',
        position: 'relative',
        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.16)}`,
        ...sx,
      }}
    >
      <FileThumbnail
        tooltip
        imageView
        file={file}
        sx={{ position: 'absolute' }}
        imgSx={{ position: 'absolute' }}
      />

      {onRemove && (
        <IconButton
          size="small"
          onClick={onRemove}
          sx={{
            p: 0.5,
            top: 4,
            right: 4,
            position: 'absolute',
            color: 'common.white',
            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48),
            '&:hover': {
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            },
          }}
        >
          <Iconify icon="mingcute:close-line" width={14} />
        </IconButton>
      )}
    </Stack>
  );
}

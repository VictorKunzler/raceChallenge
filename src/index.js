
import express from 'express';
import routes from './routes';
import fileUpload from 'express-fileupload';

import createDbConnection from './utils/createDbConnection';

const app = express();
const PORT = 3001;

app.use(express.json());

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use(routes);

createDbConnection();

app.listen(PORT, () => {
  console.log(`Server ${PORT}`);
});

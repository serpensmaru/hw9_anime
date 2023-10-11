import Collapse from '../components/Collapse/Collapse';
import CallbackChat from '../components/CallbackChat/CallbackChat';
import Liker from '../components/Liker/Liker';

const contentEl = document.querySelector('.content');
const widgetCollapse2 = new Collapse({ parent: '.content' });
widgetCollapse2.setText(`
Anim pariatur cliche reprehenderit, enim eiusmod high life
accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,
craft beer labore wes anderson cred nesciunt sapiente ea proident.
`);

const widgCallbackChat = new CallbackChat();
const widgLiker = new Liker(contentEl);

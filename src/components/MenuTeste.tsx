import styles from 'styles/components/Menu.module.css';
import { ReactNode, useState } from 'react';

interface MenuItemProps {
  text: string;
  route?: string;
  items?: MenuItemProps[];
}

export function MenuTeste() {
  const menuItems: MenuItemProps[] = [
    {
      text: 'Home',
      route: '/',
    },
    {
      text: 'Outra coisa',
      route: '/',
    },
    {
      text: 'Teste',
      items: [
        {
          text: 'Submenu',
          route: '/submenu',
        },
        {
          text: 'Submenu 2',
          route: '/submenu2'
        }
      ],
    },
    {
      text: 'Teste 2',
      items: [
        {
          text: 'Submenu',
          route: '/submenu',
        },
        {
          text: 'Submenu 2',
          route: '/submenu2',
          items: [
            {
              text: 'Submenu',
              route: '/submenu',
            },
            {
              text: 'Submenu 2',
              route: '/submenu2'
            }
          ],
        }
      ],
    },
  ];

  const [focusedItem, setFocusedItem] = useState<MenuItemProps | undefined>();
  const [selectedItem, setSelectedItem] = useState<MenuItemProps | undefined>(menuItems[0]);

  const renderItems = (items: MenuItemProps[], root: boolean = false): ReactNode => {
    return (
      items.map((item) => {
        return (
          <div key={item.text} onClick={() => setFocusedItem(item)}
          className={`${root && styles.menuItemContainer} ${
              (JSON.stringify(item) === JSON.stringify(focusedItem) && item.items)
              && styles.focused
            } ${root || styles.fullWidth}`}
          >
            <div className={`${styles.menuItem} ${
                JSON.stringify(selectedItem) === JSON.stringify(item) &&
                styles.selected
              }`}
              onClick={() => {
                !item.items && setSelectedItem(item);
              }}
            >
              {item.text}
            </div>
            {(item.items && JSON.stringify(item) === JSON.stringify(focusedItem)) && renderItems(item.items)}
          </div>
        );
      }) 
    )
  }

  return (
    <div className={styles.container}>
      {renderItems(menuItems, true)}
    </div>
  );
}

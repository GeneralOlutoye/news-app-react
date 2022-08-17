import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link } from 'react-router-dom'

export const MenuItems = [
  {
    key: "1",
    icon: <UserOutlined />,
    name: "Home",
    url: '/'
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    name: "Politics News",
    url: '/politics'
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    name: "Country News",
    url: '/country'
  },
  {
    key: "4",
    icon: <UploadOutlined />,
    name: "Football News",
    url: '/football'
  },
  {
    key: "5",
    icon: <UploadOutlined />,
    name: "Apple News",
    url: '/apple'
  },
].map((item) => ({
  label:( <Link to={item.url}>{item.name}</Link>),
  key: item.key,
  icon: item.icon
})
)
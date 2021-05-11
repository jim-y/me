import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function AppBreadcrumb() {
  const router = useRouter();
  const { asPath } = router;
  const routes = [{ href: '/', name: 'Home' }];
  const paths = asPath.split('/').filter((path) => path.length);
  for (const path of paths) {
    routes.push({
      href: `/${path}`,
      name: `${path[0].toUpperCase()}${path.substr(1)}`
    });
  }

  if (routes.length === 1) return null;

  return (
    <Breadcrumb>
      {routes.map(({ name, href }, index) => {
        const isCurrentPage = index === routes.length - 1;
        return (
          <BreadcrumbItem key={name} isCurrentPage={isCurrentPage}>
            {isCurrentPage ? (
              <BreadcrumbLink>
                <Text maxWidth="150" isTruncated>
                  <Tooltip label={name} placement="bottom">
                    {name}
                  </Tooltip>
                </Text>
              </BreadcrumbLink>
            ) : (
              <Link href={href} passHref>
                <BreadcrumbLink>{name}</BreadcrumbLink>
              </Link>
            )}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}

import React from 'react'
import { TableCell, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import Link from 'next/link';

interface TableRowsProps {
    company: String;
    role: String;
    date: String;
    type: String;
    platform: String;
    location: String;
    link: String;
    status: String;
}

const TableRows = ({company, role, date, type, platform, location, link, status}: TableRowsProps) => {
  return (
    <TableRow>
      <TableCell>
        <div className="font-medium">{company}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </TableCell>
      <TableCell>{role}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>
        <Badge variant="outline">{type}</Badge>
      </TableCell>
      <TableCell>{platform}</TableCell>
      <TableCell>
        <Link href={`${link}`}>
          <p className="text-primary">View</p>
        </Link>
      </TableCell>
      <TableCell>
        <p className="text-sm text-muted-foreground">{location}</p>
      </TableCell>
      <TableCell>
        <Badge variant="secondary">{status}</Badge>
      </TableCell>
    </TableRow>
  );
}

export default TableRows

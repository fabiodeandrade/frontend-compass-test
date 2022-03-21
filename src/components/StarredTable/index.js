import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import "./styles.css";

export default function StarredTable({ searchTerm }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${searchTerm}/starred`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });

  return (
    <Table celled size="large" sortable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nome</Table.HeaderCell>
          <Table.HeaderCell>Linguagem</Table.HeaderCell>
          <Table.HeaderCell>Estrelas</Table.HeaderCell>
          <Table.HeaderCell>Forks</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      {data.map(({ name, language, stargazers_count, html_url, forks }) => (
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <a href={html_url}>{name}</a>
            </Table.Cell>
            <Table.Cell>{language}</Table.Cell>
            <Table.Cell>{stargazers_count}</Table.Cell>
            <Table.Cell>{forks}</Table.Cell>
          </Table.Row>
        </Table.Body>
      ))}

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="4">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a">2</Menu.Item>
              <Menu.Item as="a">3</Menu.Item>
              <Menu.Item as="a">4</Menu.Item>
              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}

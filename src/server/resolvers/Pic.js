module.exports = {
  owner: (parent, args, context) => context.prisma.pic({ id: parent.id }).owner(),
  ratings: (parent, args, context) => context.prisma.pic({ id: parent.id }).ratings(),
};
